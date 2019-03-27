package org.vaadin.artur.jsfvaadin.jsf;

import java.util.List;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.RequestScoped;

import org.vaadin.artur.jsfvaadin.backend.BlogPostService;
import org.vaadin.artur.jsfvaadin.data.BlogPost;

@ManagedBean
@RequestScoped
public class BlogPostListing {

    public List<BlogPost> getBlogPosts() {
        return BlogPostService.getBlogPosts();
    }

}