package org.vaadin.artur.jsfvaadin.jsf;

import jakarta.enterprise.context.RequestScoped;
import jakarta.inject.Named;
import java.util.List;

import org.vaadin.artur.jsfvaadin.backend.BlogPostService;
import org.vaadin.artur.jsfvaadin.data.BlogPost;

@Named
@RequestScoped
public class BlogPostListing {

    public List<BlogPost> getBlogPosts() {
        return BlogPostService.getBlogPosts();
    }

}