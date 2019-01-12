"""
Wizsite Setup.
"""

from setuptools import setup

setup(
    name='wizsite',
    version='0.0.1',
    packages=['wizsite'],
    include_package_data=True,
    install_requires=[
        'requests',
        'pylint',
        'flask',
        'mysql-connector',
    ],
)
