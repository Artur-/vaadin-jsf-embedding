package org.vaadin.artur.jsfvaadin.data;

import java.io.Serializable;
import java.time.LocalDateTime;

import com.vaadin.flow.component.richtexteditor.RichTextEditor;

public class BlogPost implements Serializable {

    private Long id;

    private String title;

    private String contentQuill;

    private LocalDateTime publishTime;

    private String author;

    private String content;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setContentQuill(String contentQuill) {
        this.contentQuill = contentQuill;

    }
    public String getContentQuill() {
        return this.contentQuill;
    }

    public String getContent() {
        return this.content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public LocalDateTime getPublishTime() {
        return publishTime;
    }

    public void setPublishTime(LocalDateTime publishTime) {
        this.publishTime = publishTime;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    @Override
    public String toString() {
        return "{" + " id='" + getId() + "'" + ", title='" + getTitle() + "'" + ", content='" + getContent() + "'"
                + ", publishTime='" + getPublishTime() + "'" + ", author='" + getAuthor() + "'" + "}";
    }

}