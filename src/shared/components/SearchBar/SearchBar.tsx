"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "../../../app/blog/[slug]/BlogPost.module.css"; // Usa tus estilos existentes

export function SearchBar() {
    const [query, setQuery] = useState("");
    const router = useRouter();

    const handleSearch = (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        if (query.trim()) {
            // Redirige a la lista de blogs con el query parameter
            router.push(`/blog?s=${encodeURIComponent(query)}`);
        }
    };

    return (
        <form onSubmit={handleSearch} className={styles.searchBar}>
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className={styles.searchBtn}>
                Search
            </button>
        </form>
    );
}