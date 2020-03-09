#!/usr/bin/env python
import os
from PIL import Image

EXTENSIONS = [
    'jpg',
    'JPG',
]


def is_image(file) -> bool:
    if 'thumbnail' in file:
        os.remove(file)
    return any((file.endswith(ext) for ext in EXTENSIONS)) and 'thumbnail' not in file


def images():
    for root, dirs, files in os.walk(".", topdown=False):
        for name in files:
            if is_image(os.path.join(root, name)):
                yield os.path.join(root, name)


def main():
    for file in images():
        image = Image.open(file)
        image.thumbnail((500, 500))
        name = f'{file}__thumbnail.jpg'
        image.save(name)
        print(name, 'saved')

if __name__ == '__main__':
    main()
