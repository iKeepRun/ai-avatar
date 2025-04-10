package com.aiavatar.core.model;

import lombok.Data;

@Data
public class DailyStatVO {
    private String date;
    private Long newUsers;
    private Long generations;
    private Long payments;
    private Double revenue;
}
