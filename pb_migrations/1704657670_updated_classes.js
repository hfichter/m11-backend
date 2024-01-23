/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("iy8fc2yx7naaber")

  collection.listRule = "profile.public = true"
  collection.viewRule = "profile.public = true"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("iy8fc2yx7naaber")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
})
