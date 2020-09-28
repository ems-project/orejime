export function getPurposes(config){
    const purposes = new Set([])
    for(var i=0;i<config.apps.length;i++){
        if(typeof config.apps[i].required === 'undefined' || config.apps[i].required === false) {
            const appPurposes = config.apps[i].purposes || []
            for(var j=0;j<appPurposes.length;j++) {
                purposes.add(appPurposes[j])
            }
        }
    }
    return Array.from(purposes)
}
