package org.gaffa.experimental.angela.resources;

import org.gaffa.experimental.angela.model.Member;
import org.gaffa.experimental.angela.service.MemberService;
import org.jboss.resteasy.spi.validation.ValidateRequest;

import javax.inject.Inject;
import javax.validation.Valid;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

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

        return Response.ok(memberService.getMembers()).build();
    }

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getMember(@PathParam("id") String id) {

        return Response.ok(memberService.getMember(id)).build();
    }

    @POST
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    @ValidateRequest
    public Response updateMember(@Valid Member member) {

        memberService.storeMember(member);
        return Response.ok().build();
    }

    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @ValidateRequest
    public Response addMember(@Valid Member member) {

        return Response.ok(memberService.storeMember(member)).build();
    }

    @DELETE
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response deleteMember(@PathParam("id") String id) {

        memberService.deleteMember(id);
        return Response.ok().build();
    }
}
