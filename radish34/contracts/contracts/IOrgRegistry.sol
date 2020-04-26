pragma solidity ^0.5.8;
pragma experimental ABIEncoderV2;


interface IOrgRegistry {
    function registerOrg(
        address,
        bytes32,
        uint,
        bytes calldata,
        bytes calldata
    ) external returns (bool);

    function getOrgCount() external view returns (uint);

    function getOrg(address) external view returns (
        address,
        bytes32,
        uint,
        bytes memory,
        bytes memory
    );

    function getOrgs() external view returns (
        address[] memory,
        bytes32[] memory,
        uint[] memory,
        bytes[] memory,
        bytes[] memory
    );
}
