package com.microservice.ecommerce.model;

import com.resend.Resend;
import com.resend.core.exception.ResendException;
import com.resend.services.emails.model.SendEmailRequest;
import com.resend.services.emails.model.SendEmailResponse;

public class SendMail {
	
	public void enviarCorreo(String email, String mensaje){
        Resend resend = new Resend("re_BnUBnCFp_GhjtKMouzCiFbhFLm3csos1T");

        SendEmailRequest sendEmailRequest = SendEmailRequest.builder()
                .from("onboarding@resend.dev")
                .to(email)
                .subject("Hello World")
                .html("<p>"+mensaje+"</p>")
                .build();

        
        
        try {
            SendEmailResponse data = resend.emails().send(sendEmailRequest);
            System.out.println(data.getId());
        } catch (ResendException e) {
            e.printStackTrace();
        }
	}

}
