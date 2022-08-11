db.collections.('test-firebase').get()
    .then((firedata) => {
        console.log(firedata)
    })