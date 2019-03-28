package org.vaadin.artur.jsfvaadin.vaadin;

import java.time.LocalDateTime;

import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.WebComponentExporter;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.checkbox.Checkbox;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.grid.ItemClickEvent;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.select.Select;
import com.vaadin.flow.component.webcomponent.WebComponentDefinition;

import org.vaadin.artur.jsfvaadin.backend.BlogPostService;
import org.vaadin.artur.jsfvaadin.data.BlogPost;

public class BlogAdmin extends VerticalLayout {

    @Tag("blog-admin")
    public static class Exporter implements WebComponentExporter<BlogAdmin> {

        @Override
        public void define(WebComponentDefinition definition) {
            // This is intentionally left blank as the view has no properties
        }
    }

    private EditDialog editDialog;

    public BlogAdmin() {
        Button newBlogPost = new Button("New blog post");
        newBlogPost.addClickListener(e -> {
            edit(new BlogPost());
        });
        Grid<BlogPost> grid = new Grid<>(BlogPost.class);
        grid.setColumns("id", "title", "content", "publishTime");
        grid.setItems(BlogPostService.getBlogPosts());
        grid.addItemClickListener(e -> {
            grid.select(null);
            edit(e.getItem());
        });
        add(newBlogPost, grid);

        editDialog = new EditDialog();
        editDialog.addSaveListener(e -> {
            BlogPost blogPost = e.getBlogPost();
            if (blogPost.getId() == null) {
                blogPost.setAuthor("Random Internet Dude");
                blogPost.setPublishTime(LocalDateTime.now());        
                BlogPostService.addPost(blogPost);
                grid.getDataProvider().refreshAll();
            } else {
                BlogPostService.updatePost(blogPost);
                grid.getDataProvider().refreshItem(blogPost);
            }
        });
    }

    private void edit(BlogPost item) {
        editDialog.open(item);
    }
}