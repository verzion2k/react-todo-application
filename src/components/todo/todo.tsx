import React from 'react'
import { useFetch } from '@/hooks/useFetch'

export const Todo: React.FC = () => {
	const { data } = useFetch(`${process.env.API_URL}todo`)

	return (
		<div>
			{data.map(todo => (
				<p key={todo.id}>{todo.title}</p>
			))}
		</div>
	)
}
