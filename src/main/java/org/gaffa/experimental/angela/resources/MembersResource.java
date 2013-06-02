package org.gaffa.experimental.angela.resources;

import org.gaffa.experimental.angela.model.Member;
import org.gaffa.experimental.angela.service.MemberService;
import org.jboss.resteasy.spi.validation.ValidateRequest;

import javax.inject.Inject;
import javax.validation.Valid;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.Collection;

/**
 * Author: Henning Gross
 * Date: 30.05.13
 */
@Path("/members")
public class MembersResource {

    @Inject
    private MemberService memberService;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getMembers() {

        Collection<Member> members = memberService.getMembers();
        return Response.ok(members).build();
    }

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getMember(@PathParam("id") String id) {

        Member member = memberService.getMember(id);
        return Response.ok(member).build();
    }

    @POST
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    @ValidateRequest
    public Response updateMember(@PathParam("id") String id, @Valid Member member) {

        member = memberService.storeMember(member, id);
        return Response.ok(member).build();
    }

    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @ValidateRequest
    public Response addMember(@Valid Member member) {

        member = memberService.storeMember(member);
        return Response.ok(member).build();
    }

    @DELETE
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response deleteMember(@PathParam("id") String id) {

        memberService.deleteMember(id);
        return Response.ok().build();
    }
}
