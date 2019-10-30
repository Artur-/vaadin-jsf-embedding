package org.vaadin.artur.jsfvaadin.backend;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.vaadin.artur.jsfvaadin.data.BlogPost;

public class BlogPostService {

    private static List<BlogPost> blogPosts = new ArrayList<>();
    static {
        BlogPost p = new BlogPost();
        p.setId(1L);
        p.setAuthor("Blogger");
        p.setTitle("JSF Blog post application launched");
        p.setContent("<p>Today was a remarkable day when the JSF+Vaadin hybrid blog example was launched. People around the world gathered and celebrated the event.</p><p><img src=\"images/joy1.jpg\"><img src=\"images/joy2.jpg\"><img src=\"images/joy3.jpg\"></p>");
        p.setPublishTime(LocalDateTime.of(2019, 03, 27, 12, 25));
        blogPosts.add(p);

        p = new BlogPost();
        p.setId(2L);
        p.setAuthor("Blogger");
        p.setTitle("Embedding support in Vaadin 14");
        p.setContent("<p>Vaadin 14+ has support for exporting server side Java components as web components. This code exports the <strong>BlogAdmin </strong>component using the <strong>&lt;blog-admin&gt;</strong> tag:</p><pre spellcheck=\"false\">public static class Exporter extends WebComponentExporter&lt;BlogAdmin&gt; {\n  public Exporter() {\n    super(\"blog-admin\");\n  }\n  @Override\n  public void configureInstance(WebComponent&lt;BlogAdmin&gt; webComponent, BlogAdmin component) {\n    // No further configuration needed in this case\n  }\n}\n</pre><p><br></p><p>You can then embed it anywhere using</p><pre spellcheck=\"false\">&lt;head&gt;\n  &lt;script type=\"module\" src=\"vaadin/web-component/blog-admin.js\"&gt;&lt;/script&gt;\n&lt;body&gt;\n  &lt;blog-admin&gt;&lt;/blog-admin&gt;\n</pre><p><br></p><p>Remember to include </p><pre spellcheck=\"false\">&lt;script src=\"vaadin/build/webcomponentsjs/webcomponents-loader.js\"/&gt;&lt;/script&gt;\n</pre><p><br></p><p>in the beginning of the page to support older browsers and to deploy the servlet:</p><pre spellcheck=\"false\">&lt;servlet&gt;\n&nbsp;&nbsp; &lt;servlet-name&gt;Vaadin Servlet&lt;/servlet-name&gt;\n&nbsp;&nbsp; &lt;servlet-class&gt;com.vaadin.flow.server.VaadinServlet&lt;/servlet-class&gt;\n&lt;/servlet&gt;\n&lt;servlet-mapping&gt;\n&nbsp; &lt;servlet-name&gt;Vaadin Servlet&lt;/servlet-name&gt;\n&nbsp; &lt;url-pattern&gt;/vaadin/*&lt;/url-pattern&gt; &lt;!-- Can be any path --&gt;\n&lt;/servlet-mapping&gt;\n</pre><p><br></p>");
        p.setPublishTime(LocalDateTime.of(2019, 4, 9, 14, 00));
        blogPosts.add(p);
    }

    public static List<BlogPost> getBlogPosts() {
        return blogPosts;
    }

    public static void addPost(BlogPost blogPost) {
        long id = 1L + blogPosts.stream().map(blog -> blog.getId()).max(Long::compare).orElse(0L);
        blogPost.setId(id);
        blogPosts.add(blogPost);
    }

    public static void removePost(long id) {
        blogPosts.removeIf(post -> {
            return post.getId() == id;
        });
    }

    public static BlogPost updatePost(BlogPost blogPost) {
        blogPosts.replaceAll(post -> {
            return post.getId() == blogPost.getId() ? blogPost : post;
        });
        return blogPost;
    }

    public static Optional<BlogPost> getBlogPost(long id) {
        return blogPosts.stream().filter(blogpost -> blogpost.getId() == id).findFirst();
    }

}