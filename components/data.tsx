'use client'

import useSWR from "swr";

const fetcher = (arg: any, ...args: any) => fetch(arg, ...args).then((res) => res.json())

export default function Data() {
    const { data, error, isLoading } = useSWR('/data-api/rest/Author', fetcher);

    if (error) {
        return (
            <p>
                Data API builder is not available
            </p>
        );
    }

    if (isLoading) {
        return (
            <p className="animate-bounce">
                Checking if Data API builder is available...
            </p>
        );
    }

    return (
        <ol>
            {data.value.map((author: any) => (
                <li key={author.id}>
                    {author.first_name} {author.last_name}
                </li>
            ))}
        </ol>
    );
}