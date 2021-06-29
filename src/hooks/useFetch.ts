import { useEffect, useState } from 'react'
import { TodoData } from '@/types/todoData'

export type UseFetch = (url: string) => {
	loading: boolean
	error: string
	data: TodoData[]
}

export const useFetch: UseFetch = url => {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		fetch(url)
			.then(response => {
				if (response.ok) {
					return response.json()
				}
				throw new Error(response.statusText)
			})
			.then(todos => {
				setData(todos)
			})
			.catch(err => {
				// eslint-disable-next-line no-console
				console.error('Error fetching data: ', err)
				setError(err)
			})
			.finally(() => {
				setLoading(false)
			})
	}, [])

	return { loading, error, data }
}
