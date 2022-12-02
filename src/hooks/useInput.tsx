import { OnchangeEvent } from "../types";
import useLocalStorage from "./useLocalStorage";


const useInput = (key: string | number, initValue: string | number) => {
    const [value, setValue] = useLocalStorage(key, initValue);

    const reset = () => setValue(initValue);

    const attributeObj = {
        value,
        onChange: (e:OnchangeEvent) => setValue(e.target.value)
    }

    return [value, reset, attributeObj];
}

export default useInput 

// example: const [user, resetUser, userAttribs] = useInput('user', '')
