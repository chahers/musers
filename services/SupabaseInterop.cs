using Microsoft.JSInterop;
using System.Threading.Tasks;

public class SupabaseInterop
{
    private readonly IJSRuntime _jsRuntime;

    public SupabaseInterop(IJSRuntime jsRuntime)
    {
        _jsRuntime = jsRuntime;
    }

    public async Task<string> GetDataAsync()
    {
        return await _jsRuntime.InvokeAsync<string>("supabase.from('posts').select('*').execute()");
    }

    public async Task InsertDataAsync(string table, object data)
    {
        await _jsRuntime.InvokeVoidAsync("supabase.from(table).insert(data).execute()");
    }

    // More methods can be added as needed
}
