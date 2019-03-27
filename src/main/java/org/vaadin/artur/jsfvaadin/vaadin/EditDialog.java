package org.vaadin.artur.jsfvaadin.vaadin;

import java.util.EventListener;

import com.vaadin.flow.component.ComponentEvent;
import com.vaadin.flow.component.ComponentEventListener;
import com.vaadin.flow.component.HasValue;
import com.vaadin.flow.component.Text;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.confirmdialog.ConfirmDialog;
import com.vaadin.flow.component.dialog.Dialog;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.FlexComponent.JustifyContentMode;
import com.vaadin.flow.component.richtexteditor.RichTextEditor;
import com.vaadin.flow.component.textfield.TextArea;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.binder.Binder;
import com.vaadin.flow.data.binder.ValidationException;

import org.vaadin.artur.jsfvaadin.data.BlogPost;

public class EditDialog extends Dialog {

    private TextField title;
    private RichTextEditor contentQuill;
    private Binder<BlogPost> binder;
    private BlogPost blogPost;
    private Button cancel;
    private Button save;

    public EditDialog() {
        title = new TextField("Title");
        title.setWidth("20em");
        contentQuill = new RichTextEditor();
        binder = new Binder<BlogPost>(BlogPost.class);

        binder.bindInstanceFields(this);
        binder.forField(contentQuill).bind("contentQuill");

        cancel = new Button("Cancel");
        save = new Button("Save");
        save.addClickListener(e -> {
            try {
                binder.writeBean(this.blogPost);
                this.blogPost.setContent(this.contentQuill.getHtmlValue());
                fireEvent(new SaveEvent(this, this.blogPost));
                close();
            } catch (ValidationException e1) {
                e1.printStackTrace();
            }
        });
        cancel.addClickListener(e -> {
            close();
        });

        HorizontalLayout buttons = new HorizontalLayout(cancel, save);
        buttons.setJustifyContentMode(JustifyContentMode.BETWEEN);
        buttons.setSpacing(false);
        add(title, new Div(new Text("Content")), contentQuill,buttons);
    }

    public void open(BlogPost blogPost) {
        this.blogPost = blogPost;
        binder.readBean(blogPost);
        open();
    }

    public BlogPost getBlogPost() {
        return blogPost;
    }

    public static class SaveEvent extends ComponentEvent<EditDialog> {
        private BlogPost blogPost;

        public SaveEvent(EditDialog source, BlogPost blogPost) {
            super(source, false);
            this.blogPost = blogPost;
        }

        public BlogPost getBlogPost() {
            return blogPost;
        }
    }

    public void addSaveListener(ComponentEventListener<SaveEvent> listener) {
        addListener(SaveEvent.class, listener);
    }
}