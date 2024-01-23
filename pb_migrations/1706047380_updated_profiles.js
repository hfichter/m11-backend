/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vbyqadjq239s218")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cchpthpr",
    "name": "content",
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
})
