"use client";

import {ChangeEvent, useEffect, useState} from "react";

const Client = () => {
    const [url, setUrl] = useState<string>('');
    const [params, setParams] = useState<{ [key: string]: string }>({});
    const [newParamKey, setNewParamKey] = useState<string>('');
    const [newParamValue, setNewParamValue] = useState<string>('');

    useEffect(() => {
        try {
            const urlObj = new URL(url);
            const queryParams = Object.fromEntries(new URLSearchParams(urlObj.search));
            setParams(queryParams);
        } catch (error) {
            setParams({});
        }
    }, [url]);

    const handleUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUrl(e.target.value);
    };

    const handleParamChange = (key: string, value: string) => {
        setParams((prevParams) => ({
            ...prevParams,
            [key]: value
        }));

        const urlObj = new URL(url);
        urlObj.search = new URLSearchParams({
            ...params,
            [key]: value
        }).toString();
        setUrl(urlObj.toString());
    };

    const handleAddParam = () => {
        if (newParamKey && newParamValue) {
            handleParamChange(newParamKey, newParamValue);
            setNewParamKey('');
            setNewParamValue('');
        }
    };

    const handleRemoveParam = (key: string) => {
        const updatedParams = { ...params };
        delete updatedParams[key];
        setParams(updatedParams);

        const urlObj = new URL(url || 'http://example.com');
        urlObj.search = new URLSearchParams(updatedParams).toString();
        setUrl(urlObj.toString());
    };

    return (
        <div className="">
            <div className={"flex flex-col items-center justify-center w-fit text-white "}>
                <span className={"text-2xl font-bold"}>URL Parser</span>
                {/*<span>parser</span>*/}
            </div>
            <div className="p-6 bg-white mt-8">
                <div className="mb-4">
                    <label htmlFor="url" className="block text-lg font-medium text-gray-700 mb-2">
                        Enter URL:
                    </label>
                    <input
                        type="text"
                        id="url"
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        onChange={handleUrlChange}
                    />
                </div>
                {Object.keys(params).length > 0 && (
                    <div className="result-section">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Parsed URL:</h2>
                        <p className="mb-4 break-words">
                            <strong>URL:</strong> {url}
                        </p>
                        <h3 className="text-xl font-medium text-gray-700 mb-2">Parameters:</h3>
                        <ul>
                            {Object.entries(params).map(([key, value]) => (
                                <li key={key} className="mb-2 flex items-center">
                                    <label className="flex-1">
                                        <span className="font-medium text-gray-700">{key}:</span>
                                        <input
                                            type="text"
                                            value={value}
                                            className="w-full p-2 mt-1 border border-gray-300 rounded-lg"
                                            onChange={(e) => handleParamChange(key, e.target.value)}
                                        />
                                    </label>
                                    <button
                                        onClick={() => handleRemoveParam(key)}
                                        className="ml-2 mt-7 bg-gray-500 text-white p-2 px-4 rounded-lg"
                                    >
                                        ×
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                <div className="mt-4">
                    <h3 className="text-xl font-medium text-gray-700 mb-2">Add New Parameter:</h3>
                    <div className="flex items-center mb-2">
                        <input
                            type="text"
                            placeholder="Parameter Key"
                            value={newParamKey}
                            className="w-1/3 p-2 mr-2 border border-gray-300 rounded-lg"
                            onChange={(e) => setNewParamKey(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Parameter Value"
                            value={newParamValue}
                            className="w-1/3 p-2 mr-2 border border-gray-300 rounded-lg"
                            onChange={(e) => setNewParamValue(e.target.value)}
                        />
                        <button
                            onClick={handleAddParam}
                            className="bg-blue-500 text-white p-2 rounded-lg"
                        >
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Client;