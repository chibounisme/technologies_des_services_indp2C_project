package com.sample;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

@Path("tutorial")
public class HelloWorld {
  @GET
  @Path("helloworld")
  public String helloworld() {
    return "Hello World!";
  }

  @GET
  @Path("helloname/{name}")
  public String hello(@PathParam("name") final String name) {
    return "Hello " + name;
  }

  @GET
  @Path("item")
  @Produces({ "application/xml" })
  public Item getItem() {
    Item item = new Item("computer", 2500);
    return item;
  }

  @GET
  @Path("itemList")
  @Produces(MediaType.APPLICATION_XML)
  public List<Item> getCollItems() {
    List<Item> list = new ArrayList<>();
    Item item1 = new Item("computer", 2500);
    Item item2 = new Item("chair", 100);
    Item item3 = new Item("table", 200);

    list.add(item1);
    list.add(item2);
    list.add(item3);

    return list;
  }

  @GET
  @Path("itemListJson")
  @Produces("application/json")
  public List<Item> getJSONItems() {
    ArrayList<Item> list = new ArrayList<>();
    Item item1 = new Item("computer", 2500);
    Item item2 = new Item("chair", 100);
    Item item3 = new Item("table", 200);

    list.add(item1);
    list.add(item2);
    list.add(item3);

    return list;
  }

}
