/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vbyqadjq239s218")

  // remove
  collection.schema.removeField("9mvgnjow")

  // remove
  collection.schema.removeField("qjrzu88h")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mtcok0kv",
    "name": "rich_editor",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cchpthpr",
    "name": "description",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": 99,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vbyqadjq239s218")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9mvgnjow",
    "name": "full_name",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": 100,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qjrzu88h",
    "name": "description",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("mtcok0kv")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cchpthpr",
    "name": "job",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": 99,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
