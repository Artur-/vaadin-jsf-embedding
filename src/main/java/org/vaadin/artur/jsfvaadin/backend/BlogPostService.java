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
        p.setAuthor("User");
        p.setTitle("Blog post 1");
        p.setContent("<p>Content of blog post 1</p>");
        p.setContentQuill("[{\"insert\":\"Content of blog post 1\\n\"}]");
        p.setPublishTime(LocalDateTime.of(2018, 07, 31, 12, 25));
        blogPosts.add(p);

        p = new BlogPost();
        p.setId(2L);
        p.setAuthor("Admin");
        p.setTitle("Admin created blog posts");
        p.setContent("<p><strong>Admin is god</strong></p><p><u>Content here</u></p>");
        p.setContentQuill("[{\"attributes\":{\"bold\":true},\"insert\":\"Admin is god\"},{\"insert\":\"\\n\"},{\"attributes\":{\"underline\":true},\"insert\":\"Content here\"},{\"insert\":\"\\n\"}]");
        p.setPublishTime(LocalDateTime.of(2019, 01, 12, 10, 00));
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