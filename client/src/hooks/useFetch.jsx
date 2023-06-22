import {useState, useEffect} from "react"

const useFetch =(url)=>{
    const [data, setData]= useSate([]);
    const [loading,setLoading] = useSate(false);
    const [error,setError] = useSate(false);

    useEffect(()=>{
        const fetchData = async ()=>{
            setLoading(true);

            try{
                res =await axios.get(url);
                setData(res.data);
            }catch(error){
                setError(error);
            }
            setLoading(false);

        }
        fetchData();
    },[url]);
    const reFetch = async () => {
      setLoading(true);

      try {
        res = await axios.get(url);
        setData(res.data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };

    return {data,loading,error,reFetch}
}