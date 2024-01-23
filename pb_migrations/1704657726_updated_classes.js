/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("iy8fc2yx7naaber")

  collection.listRule = "profile = 2"
  collection.viewRule = "profile = 2"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("iy8fc2yx7naaber")

  collection.listRule = "profile.public = true"
  collection.viewRule = "profile.public = true"

  return dao.saveCollection(collection)
})
