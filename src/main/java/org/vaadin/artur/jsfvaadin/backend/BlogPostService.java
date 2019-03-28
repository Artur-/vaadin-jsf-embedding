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
        p.setContent("<p>Today was a remarkable day when the JSF+Vaadin hybrid blog application was launched. People around the world gathered and celebrated the event.</p><p><img src=\"images/joy1.jpg\"><img src=\"images/joy2.jpg\"><img src=\"images/joy3.jpg\"></p>");
        p.setContentQuill("[{\"insert\":\"Today was a remarkable day when the JSF+Vaadin hybrid blog application was launched. People around the world gathered and celebrated the event.\\n\"},{\"insert\":{\"image\":\"images/joy1.jpg\"}},{\"insert\":{\"image\":\"images/joy2.jpg\"}},{\"insert\":{\"image\":\"images/joy3.jpg\"}},{\"insert\":\"\\n\"}]");
        p.setPublishTime(LocalDateTime.of(2019, 03, 27, 12, 25));
        blogPosts.add(p);

        p = new BlogPost();
        p.setId(2L);
        p.setAuthor("Blogger");
        p.setTitle("Popularity soared");
        p.setContent("<p>The application is getting visits from some high profile persons, like Nutella himself.</p><p><br></p><p><img src=\"images/nutella.jpg\"></p>");
        p.setContentQuill("[{\"insert\":\"The application is getting visits from some high profile persons, like Nutella himself.\\n\\n\"},{\"insert\":{\"image\":\"images/nutella.jpg\"}},{\"insert\":\"\\n\"}]");
        p.setPublishTime(LocalDateTime.of(2019, 03, 28, 10, 00));
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