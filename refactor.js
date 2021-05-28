     if (!task.hasOwnProperty('parentId')) {
                return false; // skip
            }
            if (task.parentId != parentId) {
                if (task.hasOwnProperty('deadlineGroup')) {
                    var dlG = task.deadlineGroup;
                    if (task.hasOwnProperty('deadlineParent')) {
                        if (dlG != task.deadlineParent) {
                            return false; // skip
                        }
                    } else {
                        return false; // skip
                    }
                } else {
                    return false; // skip
                }
            }
            if (!task.hasOwnProperty('end')) {
                return false; // skip
            }
            if (!$.isFunction(task.end)) {
                return false; // skip
            }