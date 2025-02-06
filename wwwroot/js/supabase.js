const supabaseURL = "https://bzuyhsfqlqikavhofajz.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ6dXloc2ZxbHFpa2F2aG9mYWp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc4NzMyMzAsImV4cCI6MjA1MzQ0OTIzMH0.825vnfVVtrvxiOgvE61mD-RJCJbj6PpWjJ-nhNK5d6Y";
const supabaseClient = supabase.createClient(supabaseURL, supabaseKey);

window.getTableData = async function (table, limit, offset) {
    try {
        const { data, error } = await supabaseClient
            .from(table)
            .select('*')
            .eq('state', 'approved')
            .order('timestamp', { ascending: false })
            .limit(limit)
            .range(offset, offset + limit - 1);

        if (error) {
            console.error('Error fetching data:', error);
            return JSON.stringify([]);
        }

        // Map the data into the format expected by Blazor
        const formattedData = data.map(post => ({
            Id: post.id, 
            Author: post.author, 
            Content: post.content,
            Timestamp: post.timestamp
        }));

        return JSON.stringify(formattedData);
    } catch (err) {
        console.error('Unexpected error:', err);
        return [];
    }
}

window.insertData = async function (table, row) {
    try {
        const { data, error } = await supabaseClient
            .from(table)
            .insert([row]);

        if (error) {
            console.error('Error inserting data:', error);
            return JSON.stringify(null);
        }

        return JSON.stringify(data);
    } catch (err) {
        console.error('Unexpected error:', err);
    }
}

window.searchPosts = async function (table, searchWord, limit, offset) {
    try {
        const { data, error } = await supabaseClient
            .from(table)
            .select('*')
            .eq('state', 'approved')
            .or(`content.ilike.%${ searchWord }%,author.ilike.%${ searchWord }%`) 
            // .or(`content.similar_to.'% ${searchWord} %', author.similar_to.'% ${searchWord} %'`)
            .order('timestamp', { ascending: false })
            .limit(limit)
            .range(offset, offset + limit - 1);

        if (error) {
            console.error('Error searching data:', error);
            return JSON.stringify([]);
        }

        // Map the data into the format expected by Blazor
        const formattedData = data.map(post => ({
            Id: post.id,
            Author: post.author,
            Content: post.content,
            Timestamp: post.timestamp
        }));

        return JSON.stringify(formattedData);
    } catch (err) {
        console.error('Unexpected error:', err);
        return JSON.stringify([]);
    }
};

