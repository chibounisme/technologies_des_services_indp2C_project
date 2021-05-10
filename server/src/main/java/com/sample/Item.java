package com.sample;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Item {
  public Item() {
  }

  public Item(String description, int price) {
    this.description = description;
    this.price = price;
  }

  private String description;
  private int price;

  // Getter- Setter methods
  public String getDescription() {
    return description;
  }

  public int getPrice() {
    return price;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public void setPrice(int price) {
    this.price = price;
  }
}