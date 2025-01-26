using Microsoft.JSInterop;
using System.Threading.Tasks;

public class SupabaseInterop
{
    private readonly IJSRuntime _jsRuntime;

    public SupabaseInterop(IJSRuntime jsRuntime)
    {
        _jsRuntime = jsRuntime;
    }

    public async Task<string> GetTableData(string table, int limit, int offset)
    {
        return await _jsRuntime.InvokeAsync<string>("getTableData", table, limit, offset);
    }

    public async Task InsertData(string table, object row)
    {
        await _jsRuntime.InvokeVoidAsync("insertData", table, row);
    }
}