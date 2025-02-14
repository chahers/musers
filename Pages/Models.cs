namespace myBlazorApp.Models
{
    public class Post
    {
        public int Id { get; set; }
        public string Author { get; set; }
        public string Content { get; set; }
        public DateTime Timestamp { get; set; }
    }

    public enum PopupType
    {
        Main,
        Menu,
        CreatePost,
        PostDetails,
        PendingPage,
        SearchPosts,
        SearchResults,
        Notifications,
        HelpSupport,
        AppGuide,
        ContactUs,
        TermsConditions,
        About
    }
}