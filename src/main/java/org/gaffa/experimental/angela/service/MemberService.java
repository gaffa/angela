package org.gaffa.experimental.angela.service;

import org.gaffa.experimental.angela.model.Member;

import javax.inject.Singleton;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

/**
 * Author: Henning Gross
 * Date: 30.05.13
 */
@Singleton
public class MemberService {

    private Map<String, Member> members = new HashMap<>();

    public MemberService() {

        String id1 = UUID.randomUUID().toString();
        members.put(id1, new Member().setId(id1).setName("Hans Wurst"));

        String id2 = UUID.randomUUID().toString();
        members.put(id2, new Member().setId(id2).setName("Lisa Maier"));
    }

    public Member getMember(String id) {

        return members.get(id);
    }

    public Collection<Member> getMembers() {

        return members.values();
    }

    public Member storeMember(Member member) {

        if (member.getId() == null || member.getId().isEmpty()) {
            member.setId(UUID.randomUUID().toString());
        }
        members.put(member.getId(), member);
        return member;
    }

    public void deleteMember(String id) {

        members.remove(id);
    }

    public Member storeMember(Member member, String id) {

        return storeMember(member);
    }
}
