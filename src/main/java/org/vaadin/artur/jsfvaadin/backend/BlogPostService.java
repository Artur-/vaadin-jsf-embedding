package org.vaadin.artur.jsfvaadin.backend;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Comparator;
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
        p.setContentQuill("[{\"insert\":\"Today was a remarkable day when the JSF+Vaadin hybrid blog example was launched. People around the world gathered and celebrated the event.\\n\"},{\"insert\":{\"image\":\"images/joy1.jpg\"}},{\"insert\":{\"image\":\"images/joy2.jpg\"}},{\"insert\":{\"image\":\"images/joy3.jpg\"}},{\"insert\":\"\\n\"}]");
        p.setPublishTime(LocalDateTime.of(2019, 03, 27, 12, 25));
        blogPosts.add(p);

        p = new BlogPost();
        p.setId(2L);
        p.setAuthor("Blogger");
        p.setTitle("Embedding support in Vaadin 14");
        p.setContent("<p>With Vaadin 14, Flow has added support for embedding views in any web site. </p><p>You can export component hierarchies as web components. This exports the `BlogAdmin` component using the `&lt;blog-admin&gt;` tag:</p><pre spellcheck=\"false\">@Tag(\"blog-admin\")\npublic static class Exporter implements WebComponentExporter&lt;BlogAdmin&gt; {\n  @Override\n  public void define(WebComponentDefinition definition) {\n    // This is intentionally left blank as the view has no properties\n  }\n}\n</pre><p><br></p><p>You can then embed it in HTML (PHP/JSP/.NET - does not matter) using</p><pre spellcheck=\"false\">&lt;link rel=\"import\" href=\"vaadin/web-component/blog-admin.html\" /&gt;\n\n&lt;blog-admin&gt;&lt;/blog-admin&gt;\n</pre><p><br></p><p>Remember to include </p><pre spellcheck=\"false\">&lt;script src=\"frontend/bower_components/webcomponentsjs/webcomponents-loader.js\"&gt;&lt;/script&gt;\n</pre><p>in the beginning of the page.</p><p><br></p><p><br></p><p>PS. NPM/JS module version is coming up, stay tuned.</p><p><br></p>");
        p.setContentQuill("[{\"insert\":\"With Vaadin 14, Flow has added support for embedding views in any web site. \\nYou can export component hierarchies as web components. This exports the `BlogAdmin` component using the `<blog-admin>` tag:\\n@Tag(\\\"blog-admin\\\")\"},{\"attributes\":{\"code-block\":true},\"insert\":\"\\n\"},{\"insert\":\"public static class Exporter implements WebComponentExporter<BlogAdmin> {\"},{\"attributes\":{\"code-block\":true},\"insert\":\"\\n\"},{\"insert\":\"  @Override\"},{\"attributes\":{\"code-block\":true},\"insert\":\"\\n\"},{\"insert\":\"  public void define(WebComponentDefinition definition) {\"},{\"attributes\":{\"code-block\":true},\"insert\":\"\\n\"},{\"insert\":\"    // This is intentionally left blank as the view has no properties\"},{\"attributes\":{\"code-block\":true},\"insert\":\"\\n\"},{\"insert\":\"  }\"},{\"attributes\":{\"code-block\":true},\"insert\":\"\\n\"},{\"insert\":\"}\"},{\"attributes\":{\"code-block\":true},\"insert\":\"\\n\"},{\"insert\":\"\\nYou can then embed it in HTML (PHP/JSP/.NET - does not matter) using\\n<link rel=\\\"import\\\" href=\\\"vaadin/web-component/blog-admin.html\\\" />\"},{\"attributes\":{\"code-block\":true},\"insert\":\"\\n\\n\"},{\"insert\":\"<blog-admin></blog-admin>\"},{\"attributes\":{\"code-block\":true},\"insert\":\"\\n\"},{\"insert\":\"\\nRemember to include \\n<script src=\\\"frontend/bower_components/webcomponentsjs/webcomponents-loader.js\\\"></script>\"},{\"attributes\":{\"code-block\":true},\"insert\":\"\\n\"},{\"insert\":\"in the beginning of the page.\\n\\n\\nPS. NPM/JS module version is coming up, stay tuned.\\n\\n\"}]");
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