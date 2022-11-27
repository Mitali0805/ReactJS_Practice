import axios from 'axios'
import { useEffect, useReducer } from 'react'

const initialState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'success':
            return {
                loading: false,
                error: '',
                post: action.payload
            }
        case 'error':
            return {
                loading: false,
                error: action.err,
                post: {}
            }
        default: return state
    }
}

function Datafetching() {
    const [data, dispatch] = useReducer(reducer, initialState)
    console.log(data, 'data')
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then((res)=>{
            console.log(res)
            dispatch({
                type:'success',
                payload: res.data
            })
        })
        .catch((err)=>{
            dispatch({
                type:'error',
                err: 'Something went Wrong !!'
            })
        })
    }, [])

    return (
        <div>
            DataFetching <br/>
            {data.loading ? 'Loading' : data.post.title}
            {data.error ? data.error: null}
        </div>
    )
}

export default Datafetching