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

    @Pattern(regexp = "[a-zA-Z\\s]+")
    private String name = "";

    public String getName() {
        return name;
    }

    public Member setName(String name) {
        this.name = name;
        return this;
    }

    public String getId() {
        return id;
    }

    public Member setId(String id) {
        this.id = id;
        return this;
    }
}
