export
const importsPython = `
import os
import time
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler, FileModifiedEvent
`

export 
const watchdogPython = `
class MyHandler(FileSystemEventHandler):
    def on_modified(self, event):
        if type(event) == FileModifiedEvent:
            print(os.path.relpath(event.src_path))

event_handler = MyHandler()
observer = Observer()
observer.schedule(event_handler, path='.', recursive=True)
observer.start()
`

export
const loopPython = `
while True:
    time.sleep(1)
`