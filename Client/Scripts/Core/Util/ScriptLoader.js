class ScriptLoader {
    static scripts_div = document.getElementById("script_loader_scripts_div");
    static scripts = [];
    
    //For some reason im not sure the id is set or something
    //Either 'RemoveAllScripts' is not working or the script is still loaded in with the element being gone
    
    static LoadScript(id, location) {
        var object = document.createElement('script');
        object.id = id;
        object.setAttribute('src', location);

        document.body.appendChild(object);
        ScriptLoader.scripts.push_back(id);
    }

    static RemoveAllScripts() {
        for (i = 0; i < ScriptLoader.scripts.length; i++) {
            var object = document.getElementById(ScriptLoader.scripts[i]);
            document.body.removeChild(object);
        }
    }
}