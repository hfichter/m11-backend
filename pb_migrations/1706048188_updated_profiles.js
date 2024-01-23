/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vbyqadjq239s218")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f0snqiqx",
    "name": "name",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vbyqadjq239s218")

  // remove
  collection.schema.removeField("f0snqiqx")

  return dao.saveCollection(collection)
})
