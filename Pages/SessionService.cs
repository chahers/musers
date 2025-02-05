using myBlazorApp.Models;

public class SessionService
{
    public string SearchQuery { get; set; } = "";
    public List<Post>? SearchedPosts;
    public PopupType? activePopup;
}
