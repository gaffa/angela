package org.gaffa.experimental.angela.util.provider;

import org.hibernate.validator.internal.engine.PathImpl;
import org.hibernate.validator.method.MethodConstraintViolation;
import org.hibernate.validator.method.MethodConstraintViolationException;

import javax.ws.rs.core.Response;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;
import java.util.HashMap;
import java.util.Map;

/**
 * Author: Henning Gross
 * Date: 01.06.13
 */
@Provider
public class ValidationExceptionMapper implements
        ExceptionMapper<MethodConstraintViolationException> {

    @Override
    public Response toResponse(MethodConstraintViolationException ex) {

        Map<String, String> errors = new HashMap<>();
        for (MethodConstraintViolation<?> methodConstraintViolation : ex.getConstraintViolations()) {

            String fieldName = ((PathImpl) methodConstraintViolation.getPropertyPath()).getLeafNode().getName();
            errors.put(fieldName, methodConstraintViolation.getMessage());
        }
        return Response.status(javax.ws.rs.core.Response.Status.PRECONDITION_FAILED).entity(errors).build();
    }
}
