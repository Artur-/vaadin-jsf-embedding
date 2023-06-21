package org.vaadin.artur.jsfvaadin.jsf;

import jakarta.annotation.ManagedBean;
import jakarta.enterprise.context.RequestScoped;

import java.util.List;

import org.vaadin.artur.jsfvaadin.backend.BlogPostService;
import org.vaadin.artur.jsfvaadin.data.BlogPost;

@ManagedBean
@RequestScoped
public class BlogPostListing {

    public List<BlogPost> getBlogPosts() {
        return BlogPostService.getBlogPosts();
    }

}
