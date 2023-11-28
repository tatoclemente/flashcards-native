import { useCallback, useState } from "react"

const useForm = (baseState) => {
    const [form, setForm] = useState(baseState)

    const handleChange = useCallback(
        (updtae) => {
            const { name, value } = updtae

            setForm((prevState) => {
                if(!name) {
                    return updtae
                } else {
                    return { ...prevState, [name]: value }
                }
                
            })
    }, [setForm])
  return [ form, handleChange ]
}

export default useForm