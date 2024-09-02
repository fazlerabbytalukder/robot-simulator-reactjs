import React, { useState } from 'react';

const directions = ['NORTH', 'EAST', 'SOUTH', 'WEST'];

const RobotSimulator = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [direction, setDirection] = useState('NORTH');

    const moveForward = () => {
        let { x, y } = position;

        switch (direction) {
            case 'NORTH':
                if (y < 4) y += 1;
                break;
            case 'SOUTH':
                if (y > 0) y -= 1;
                break;
            case 'EAST':
                if (x < 4) x += 1;
                break;
            case 'WEST':
                if (x > 0) x -= 1;
                break;
            default:
                break;
        }
        setPosition({ x, y });
    };

    const rotateLeft = () => {
        const currentDirectionIndex = directions.indexOf(direction);
        const newDirectionIndex =
            (currentDirectionIndex - 1 + directions.length) % directions.length;
        setDirection(directions[newDirectionIndex]);
    };

    const rotateRight = () => {
        const currentDirectionIndex = directions.indexOf(direction);
        const newDirectionIndex = (currentDirectionIndex + 1) % directions.length;
        setDirection(directions[newDirectionIndex]);
    };

    return (
        <div className="grid grid-cols-5 gap-2 p-5 bg-gray-100 rounded-lg shadow-lg">
            {[...Array(25)].map((_, i) => (
                <div
                    key={i}
                    className={`w-16 h-16 flex items-center justify-center rounded-lg ${i === position.y * 5 + position.x
                            ? 'bg-orange-500 text-white font-bold'
                            : 'bg-gray-200'
                        }`}
                >
                    {i === position.y * 5 + position.x && <span>{direction[0]}</span>}
                </div>
            ))}
            <div className="col-span-5 flex justify-center mt-5">
                <button
                    onClick={rotateLeft}
                    className="mx-2 p-2 bg-blue-500 text-white rounded-lg shadow-lg"
                >
                    Rotate Left
                </button>
                <button
                    onClick={moveForward}
                    className="mx-2 p-2 bg-green-500 text-white rounded-lg shadow-lg"
                >
                    Move Forward
                </button>
                <button
                    onClick={rotateRight}
                    className="mx-2 p-2 bg-blue-500 text-white rounded-lg shadow-lg"
                >
                    Rotate Right
                </button>
            </div>
        </div>
    );
};

export default RobotSimulator;
