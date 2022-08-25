import { ref, toRefs, watch } from "vue";

export const select = (props: any) => {

    const { options } = toRefs(props);

    const notExistItems = "Item that does not exist";

    const selected = ref("");
    const open = ref(false);
    const searchItem: any = ref(null);
    const inputDisable = ref(false);
    const placeholder = ref("Select an item");

    const search = (data: string) => {

        const datasearch :Array<string> = options.value.filter((element: string) =>
            element.toLowerCase().includes(data.toLowerCase())
        );
        searchItem.value = datasearch;
        searchInvalidate(data, datasearch);
        
    };

    const searchInvalidate = (data : string, datasearch :Array<string>)=>{
        if (data && !datasearch.length) {
            searchItem.value = ["No items were found."];
            selected.value = "Item that does not exist";
            inputDisable.value = true;
        }
    }  

    const clickCategorie = (data: string) => {
        if (!validateSearch(data)) return true;
        selected.value = data;
        open.value = false;
    };

    const validateSearch = (search: string): boolean => {
        if (search !== "No items were found.") return true;
        return false;
    };

    const filterSearch = () => {
        if (!searchItem.value && options.value) return options.value;
        if (searchItem.value) return searchItem.value;
    };

    const customMethod = () => {
        open.value = false;
    };

    const resetSearchInput = () => {
        if (selected.value === notExistItems) {
            selected.value = "";
            search("");
            inputDisable.value = false;
        }
    };


    watch(open, (value) => {
        placeholder.value = value && "This is a search input" || "Select an item";
        resetSearchInput();
    });



    return {
        selected,
        placeholder,
        inputDisable,
        open,
        searchItem,
        search,
        clickCategorie,
        validateSearch,
        filterSearch,
        customMethod


    };

}