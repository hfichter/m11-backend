/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vbyqadjq239s218")

  // remove
  collection.schema.removeField("mtcok0kv")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vbyqadjq239s218")

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

  return dao.saveCollection(collection)
})
