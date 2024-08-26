"use client";
import SearchResult from '@/components/SearchResult';
import { useSupabase } from '@/lib/supabase/hooks/useSupabase';
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

const page = () => {
    const { query } = useParams()
    const { filteredData, getFilteredData } = useSupabase();

    useEffect(() => {
        getFilteredData(query.toString())
    }, [])
    
    return (
        <div className="text-black">
            <SearchResult filteredData={filteredData} />
        </div>
    )
}

export default page;
