package org.gaffa.experimental.angela.model;

import javax.validation.constraints.Pattern;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * Author: Henning Gross
 * Date: 30.05.13
 */
@XmlRootElement
public class Member {

    private String id;

    @Pattern(regexp = "[a-zA-Z]+")
    private String name = "";

    private String otherValue;

    private String description;

    public Member setName(String name) {
        this.name = name;
        return this;
    }

    public Member setOtherValue(String otherValue) {
        this.otherValue = otherValue;
        return this;
    }

    public String getName() {
        return name;
    }

    public String getOtherValue() {
        return otherValue;
    }

    public String getId() {
        return id;
    }

    public Member setId(String id) {
        this.id = id;
        return this;
    }

    public String getDescription() {
        return description;
    }

    public Member setDescription(String description) {
        this.description = description;
        return this;
    }
}
