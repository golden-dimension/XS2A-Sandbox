package de.adorsys.ledgers.oba.service.api.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import de.adorsys.ledgers.middleware.api.domain.sca.OpTypeTO;
import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class DecoupledConfRequest {
    private String message;
    private String objId;
    private OpTypeTO opType;
    private String authorizationId;
    private int authorizationTTL;
    private String addressedUser;
    private String httpMethod;
    private String confirmationUrl;
    private String authCode;
    private boolean confirmed;
}
